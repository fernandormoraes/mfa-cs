import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:product/domain/entities/product.dart';
import 'package:product/services/local_storage_service.dart';

class ProductController {
  final TextEditingController skuController = TextEditingController();
  final TextEditingController priceController = TextEditingController();
  final TextEditingController nameController = TextEditingController();
}

class ProductList extends AutoDisposeAsyncNotifier<List<Product>> {
  @override
  Future<List<Product>> build() async {
    final encodedData = LocalStorageService().getItem('products');

    List<Map<String, dynamic>> data = List.from(encodedData ?? []);

    List<Product> listProducts = data.map((e) => Product.fromJson(e)).toList();

    state = AsyncData(listProducts);

    return listProducts;
  }

  Future<void> addProduct(Product product) async {
    final encodedData = LocalStorageService().getItem('products');

    List<Map<String, dynamic>> data = List.from(encodedData ?? []);

    List<Product> listProducts = data.map((e) => Product.fromJson(e)).toList();

    int id = 1;

    if (listProducts.isNotEmpty) {
      id = listProducts.last.id + 1;
    }

    final Product newProduct = Product(
        id: id, sku: product.sku, price: product.price, name: product.name);

    listProducts.add(newProduct);

    LocalStorageService()
        .setItem('products', listProducts.map((e) => e.toJson()).toList());

    state = AsyncData(listProducts);
  }
}

final productProvider =
    AsyncNotifierProvider.autoDispose<ProductList, List<Product>>(
        ProductList.new);
