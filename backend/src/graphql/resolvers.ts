export const resolvers = {
  Query: {
    publicMessage: () => "This is public",

    privateMessage: (_: any, __: any, context: any) => {
      if (!context.user) {
        throw new Error("Unauthorized");
      }

      return "This is private 🔐";
    },

    me: (_: any, __: any, context: any) => {
      if (!context.user) throw new Error("Unauthorized");

      return {
        id: context.user.sub,
        email: context.user.email || null,
        name: context.user.name || context.user.nickname || null,
      };
    },
  },
};
