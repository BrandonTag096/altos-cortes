-- CreateTable
CREATE TABLE "product" (
    "productId" VARCHAR(36) NOT NULL,
    "productName" VARCHAR(255) NOT NULL,
    "productDescription" VARCHAR(255),
    "productPriceSale" DOUBLE PRECISION NOT NULL,
    "productPriceBuy" DOUBLE PRECISION NOT NULL,
    "productCreatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "prodcutUpdatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "product_pkey" PRIMARY KEY ("productId")
);
