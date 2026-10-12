-- AlterTable
ALTER TABLE "Booking" ADD COLUMN     "duration" INTEGER NOT NULL DEFAULT 120,
ADD COLUMN     "tableId" INTEGER;

-- CreateTable
CREATE TABLE "Table" (
    "id" SERIAL NOT NULL,
    "number" INTEGER NOT NULL,
    "capacity" INTEGER NOT NULL,

    CONSTRAINT "Table_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Table_number_key" ON "Table"("number");

-- CreateIndex
CREATE INDEX "Table_capacity_idx" ON "Table"("capacity");

-- CreateIndex
CREATE INDEX "Booking_date_time_idx" ON "Booking"("date", "time");

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_tableId_fkey" FOREIGN KEY ("tableId") REFERENCES "Table"("id") ON DELETE SET NULL ON UPDATE CASCADE;
