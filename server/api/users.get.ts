import userData from "../../public/data/users.json";

export type User = {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
};

export default defineEventHandler(async () => {
  const rawUsers: any[] = userData?.users ?? userData ?? [];

  const users: User[] = rawUsers.map((u: any) => ({
    firstName: u.firstName ?? u.first_name ?? "",
    lastName: u.lastName ?? u.last_name ?? "",
    age: typeof u.age === "number" ? u.age : Number(u.age) || 0,
    email: u.email ?? u.emailAddress ?? "",
  }));

  return users;
});
