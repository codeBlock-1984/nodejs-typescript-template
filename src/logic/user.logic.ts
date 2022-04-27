import { Prisma as P } from '@prisma/client';

import { prisma } from '../database/prisma';

export class User {
  readonly SELECT = {
    id: true,
    firstname: true,
    lastname: true,
    score: true,
  } as const;

  static create<D extends P.UserCreateInput>(data: D) {
    return prisma.user.create({ data });
  }
}
