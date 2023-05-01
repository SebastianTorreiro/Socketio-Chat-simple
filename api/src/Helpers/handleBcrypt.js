import bcrypt from "bcryptjs";

export async function encrypt(passwordTextPlain){
  const hash = await bcrypt.hash(passwordTextPlain, 10);
  return hash;
};

export async function compare(passwordTextPlain, passwordHash){
  return await bcrypt.compare(passwordTextPlain, passwordHash);
};

