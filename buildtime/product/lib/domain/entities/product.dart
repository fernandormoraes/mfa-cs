class Product {
  final int id;
  final String sku;
  final double price;
  final String name;

  Product(
      {required this.id,
      required this.sku,
      required this.price,
      required this.name});

  Map<String, dynamic> toJson() {
    return {'id': id, 'sku': sku, 'price': price, 'name': name};
  }

  Product.fromJson(Map<String, dynamic> json)
      : id = json['id'],
        sku = json['sku'],
        price = json['price'],
        name = json['name'];
}
