-- CreateTable
CREATE TABLE "Books" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Books_pkey" PRIMARY KEY ("id")
);
