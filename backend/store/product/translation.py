from modeltranslation.translator import translator, TranslationOptions
from .models import ProductSubCategory, ProductCategory, Product, ProductSpecs


class ProductTranslationOptions(TranslationOptions):
    fields = ('name', 'description')


class ProductSpecsTranslationOptions(TranslationOptions):
    fields = ('name', 'value')


translator.register(ProductSubCategory, ProductTranslationOptions)
translator.register(ProductCategory, ProductTranslationOptions)
translator.register(Product, ProductTranslationOptions)

translator.register(ProductSpecs, ProductSpecsTranslationOptions)
