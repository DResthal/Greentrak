-- CreateTable
CREATE TABLE "Client" (
    "clientId" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "streetAddress" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zipcode" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "contactEmail" TEXT NOT NULL,
    "contactPhone" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Client_name_key" ON "Client"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Client_contactEmail_key" ON "Client"("contactEmail");

-- CreateIndex
CREATE UNIQUE INDEX "Client_contactPhone_key" ON "Client"("contactPhone");
