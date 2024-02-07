import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:product/domain/entities/product.dart';
import 'package:product/presenter/product_controller.dart';

class ProductPage extends ConsumerStatefulWidget {
  const ProductPage({super.key});

  @override
  ConsumerState<ProductPage> createState() => _ProductPageState();
}

class _ProductPageState extends ConsumerState<ProductPage> {
  final ProductController _productController = ProductController();

  @override
  Widget build(BuildContext context) {
    final productList = ref.watch(productProvider);

    return Padding(
      padding: const EdgeInsets.all(24),
      child: Container(
        constraints: const BoxConstraints(maxWidth: 500),
        child: Card(
          child: Padding(
            padding: const EdgeInsets.all(24.0),
            child: Column(
              children: [
                const Text('Product Registration'),
                const SizedBox(height: 8),
                Form(
                    child: Column(
                  children: [
                    Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: TextFormField(
                          controller: _productController.skuController,
                          maxLength: 18,
                          inputFormatters: [
                            FilteringTextInputFormatter.digitsOnly
                          ],
                          keyboardType: TextInputType.number,
                          decoration: InputDecoration(
                              border: OutlineInputBorder(
                                  borderRadius: BorderRadius.circular(8)),
                              labelText: 'Product Sku')),
                    ),
                    Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: TextFormField(
                          controller: _productController.priceController,
                          maxLength: 16,
                          inputFormatters: [
                            FilteringTextInputFormatter.digitsOnly
                          ],
                          keyboardType: TextInputType.number,
                          decoration: InputDecoration(
                              border: OutlineInputBorder(
                                  borderRadius: BorderRadius.circular(8)),
                              labelText: 'Product Price')),
                    ),
                    Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: TextFormField(
                          controller: _productController.nameController,
                          maxLength: 50,
                          decoration: InputDecoration(
                              border: OutlineInputBorder(
                                  borderRadius: BorderRadius.circular(8)),
                              labelText: 'Product Description')),
                    ),
                    const SizedBox(height: 24),
                    Padding(
                      padding: const EdgeInsets.only(right: 8.0),
                      child: Align(
                        alignment: Alignment.centerRight,
                        child: MaterialButton(
                          elevation: 2.0,
                          shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(4),
                              side: const BorderSide(color: Colors.blueGrey)),
                          onPressed: () async {
                            final product = Product(
                                id: 0,
                                sku: _productController.skuController.text,
                                price: double.tryParse(_productController
                                        .priceController.text) ??
                                    0,
                                name: _productController.nameController.text);

                            await ref
                                .read(productProvider.notifier)
                                .addProduct(product);
                          },
                          child: const Text('Save'),
                        ),
                      ),
                    ),
                  ],
                )),
                const SizedBox(height: 16),
                const Align(
                  alignment: Alignment.centerLeft,
                  child: Text(
                    'Product List',
                    style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                  ),
                ),
                const SizedBox(height: 16),
                const Row(
                  children: [
                    Expanded(
                      child: Text('SKU'),
                    ),
                    Expanded(
                      flex: 2,
                      child: Text('DESCRIPTION'),
                    ),
                    Expanded(
                      child: Text('PRICE'),
                    ),
                  ],
                ),
                const SizedBox(height: 16),
                if (!productList.isLoading && productList.valueOrNull != null)
                  Flexible(
                    child: ListView.builder(
                        shrinkWrap: true,
                        itemCount: productList.valueOrNull?.length ?? 0,
                        itemBuilder: (context, index) => Padding(
                              padding:
                                  const EdgeInsets.symmetric(vertical: 8.0),
                              child: Row(
                                children: [
                                  Expanded(
                                    child: Text(
                                        productList.valueOrNull?[index].sku ??
                                            ''),
                                  ),
                                  Expanded(
                                    flex: 2,
                                    child: Text(
                                        productList.valueOrNull?[index].name ??
                                            ''),
                                  ),
                                  Expanded(
                                    child: Text(productList
                                            .valueOrNull?[index].price
                                            .toString() ??
                                        ''),
                                  ),
                                ],
                              ),
                            )),
                  )
                else
                  const SizedBox()
              ],
            ),
          ),
        ),
      ),
    );
  }
}
