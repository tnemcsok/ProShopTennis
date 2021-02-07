const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Mutations = {
    async createPlayer(parent, args, ctx, info) {
     
        //ctx.db.mutation is returning a promise so we have to wait for it
      const player = await ctx.db.mutation.createPlayer(
        {
          data: {
            ...args,
          },
        },
        info
      );
  
      console.log(player);
  
      return player;
    },

    async createCompetition(parent, args, ctx, info) {

      //Create the competition in the database

      const competition = await ctx.db.mutation.createCompetition(
        {
          data: { 
                  date: args.date,
                  review: args.review,
                  image: args.image,
                  result: { set: args.result },
                  type: args.type,
                  firstPoint: args.firstPoint,
                 },
        }, 
        info
      );


      //Update or add the players in the database

       args.result.forEach(async (player, index) => {
         //Query if the player is already in the database
         const [existingPlayer] = await ctx.db.query.players({
          where: {
            name: player,
          },
        });


        //Set the points earned for the different places
        if(index == 0){
         var point = args.firstPoint;
        } else if (index == 1) {
          var point = args.firstPoint*0.7;
        } else if (index == 2 || index == 3) {
          var point = args.firstPoint*0.35;
        } else if (index == 4 || index == 5) {
          var point = args.firstPoint*0.275;
        } else if (index == 6 || index == 7) {
          var point = args.firstPoint*0.2;
        }
        else {
          var point = args.firstPoint*0.10;
        }

        //Set the gold and silver medals earned
        if(index == 0){
          var gold = 1;
          var silver = 0;
         } else if (index == 1) {
          var silver = 1;
          var gold = 0;
        } else {
          var gold = 0;
          var silver = 0;
        }

        if(existingPlayer){

         

          const res = await ctx.db.mutation.updatePlayer(
            {
              where: { id: existingPlayer.id },
              data: { points: existingPlayer.points + point,
                      competitions: existingPlayer.competitions + 1,
                      golds: existingPlayer.golds + gold,
                      silvers: existingPlayer.silvers + silver,
                      competition: {connect: {id: competition.id}} }
            }
          );
        } else {
          
          const res = await ctx.db.mutation.createPlayer(
            {
              data: { 
                  name: player,
                  points: point,
                  competitions: 1,
                  golds: gold,
                  silvers: silver,
                  competition: {connect: {id: competition.id}},
                  image: 'https://res.cloudinary.com/ulquirola/image/upload/v1611502709/ProShop/blankpicture_yivqbh.png' }
            }
          );
        };
        
       });
       
       return competition;

    },

    async createScheduledComp(parent, args, ctx, info) {

      //Create the scheduled competition in the database

      const scheduledComp = await ctx.db.mutation.createScheduledComp(
        {
          data: { 
                  date: args.date,
                  place: args.place,
                  start: args.start,
                  type: args.type,
                 },
        }, 
        info
      );

      args.entrantNames.forEach(async entrant => {
        const [existingEntrant] = await ctx.db.query.entrants({
          where: {
            name:entrant,
          },
        });

        if(existingEntrant){
          const resp = await ctx.db.mutation.updateEntrant(
            {
              where: { id: existingEntrant.id },
              data: { scheduledComps: {connect: {id: scheduledComp.id}} }
            }
          );
        }else{
          const reps = await ctx.db.mutation.createEntrant(
            {
              data: { 
                  name: entrant,
                  scheduledComps: {connect: {id: scheduledComp.id}},
            }}
          );
        }


      })
      
      return scheduledComp;
    },

    async updateScheduledComp(parent, args, ctx, info) {


      const getScheduledComp = await ctx.db.query.scheduledComp(
        { where: {id: args.id},},
      );

      const [existingEntrant] = await ctx.db.query.entrants({
        where: {
          name: args.entrant,
        },
      });

      if(existingEntrant){
        const resp = await ctx.db.mutation.updateEntrant(
          {
            where: { id: existingEntrant.id },
            data: { scheduledComps: {connect: {id: getScheduledComp.id}} }
          }
        );
      }else{
        const reps = await ctx.db.mutation.createEntrant(
          {
            data: { 
                name: args.entrant,
                phonenumber: args.phonenumber,
                email: args.email,
                scheduledComps: {connect: {id: getScheduledComp.id}},
          }}
        );
      }
    
      return getScheduledComp;
    },

    async signup(parent, args, ctx, info) {
      // lowercase their email
      args.email = args.email.toLowerCase();
      // hash their password
      const password = await bcrypt.hash(args.password, 10);
      // create the user in the database
      const user = await ctx.db.mutation.createUser(
        {
          data: {
            ...args,
            password,
            permissions: { set: ['USER'] },
          },
        },
        info
      );
      // create the JWT token for them
      const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
      // We set the jwt as a cookie on the response
      ctx.response.cookie('token', token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year cookie
      });
      // Finalllllly we return the user to the browser
      return user;
    },

    async signin(parent, { email, password }, ctx, info) {
      // 1. check if there is a user with that email
      const user = await ctx.db.query.user({ where: { email } });
      if (!user) {
        throw new Error(`No such user found for email ${email}`);
      }
      // 2. Check if their password is correct
      const valid = await bcrypt.compare(password, user.password);
      if (!valid) {
        throw new Error('Invalid Password!');
      }
      // 3. generate the JWT Token
      const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
      // 4. Set the cookie with the token
      ctx.response.cookie('token', token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 365,
      });
      // 5. Return the user
      return user;
    },

    signout(parent, args, ctx, info) {
      ctx.response.clearCookie('token');
      return { message: 'Goodbye!' };
    },

  };
  module.exports = Mutations;
