import { readFile } from "fs/promises";
import path from "path";

export type User = {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
};

export default defineEventHandler(async () => {
  const filePath = path.resolve(process.cwd(), "server", "users.json");
  const file = await readFile(filePath, "utf-8");
  const parsed = JSON.parse(file);
  const rawUsers: any[] = parsed?.users ?? parsed ?? [];

  const users: User[] = rawUsers.map((u: any) => ({
    firstName: u.firstName ?? u.first_name ?? "",
    lastName: u.lastName ?? u.last_name ?? "",
    age: typeof u.age === "number" ? u.age : Number(u.age) || 0,
    email: u.email ?? u.emailAddress ?? "",
  }));

  return users;
});
