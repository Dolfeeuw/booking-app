import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import mockData from "./mock/mock.json" assert { type: "json" };

const typeDefs = `#graphql
  type Query{ 
    booking(bookingCode: String!): Booking
  }
  type Booking {
    bookingCode: String
    passengers: Passenger
    itinerary: Itinerary
  }
  type Passenger {
    id: Int
    firstName: String
    lastName: String
    title: Title
  }
  type Itinerary {
    type: String
    connections: [Connection]
  }
  type Connection {
    id: Int
    duration: String
    origin: Origin
    destination: Destination
  }

  type Origin {
    IATACode: String
    name: String
    city: City
  }

  type Destination {
    IATACode: String
    name: String
    city: City
  }

  type City {
    IATACode: String
    name: String
    country: Country
  }

  type Country {
    code: String
    name: String
  }

  type Title {
    code: String
    name: String
  }
`;

const bookings = [mockData];
const resolvers = {
  Query: {
    booking(parent, args) {
      const filteredBookings = bookings.filter(
        (booking) => booking.bookingCode === args.bookingCode
      )[0];
      return filteredBookings;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
