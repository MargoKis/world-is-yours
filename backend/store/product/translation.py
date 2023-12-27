from modeltranslation.translator import translator, TranslationOptions
from .models import ProductSubCategory, Product


class SubcategoryTranslationOptions(TranslationOptions):
    fields = ('name', 'description')


class ProductTranslationOptions(TranslationOptions):
    fields = ('name', 'description')


translator.register(ProductSubCategory, SubcategoryTranslationOptions)
translator.register(Product, ProductTranslationOptions)
