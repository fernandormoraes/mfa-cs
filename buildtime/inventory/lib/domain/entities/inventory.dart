import 'package:inventory/domain/entities/movement_enum.dart';

class Inventory {
  final int id;
  final int idProduct;
  final double amount;
  final Movement movement;
  final DateTime createdDate;

  Inventory(
      {required this.id,
      required this.idProduct,
      required this.amount,
      required this.movement,
      required this.createdDate});

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'idProduct': idProduct,
      'amount': amount,
      'movement': movement.index,
      'createdDate': createdDate.toString()
    };
  }

  Inventory.fromJson(Map<String, dynamic> json)
      : id = json['id'],
        idProduct = json['idProduct'],
        amount = json['amount'],
        movement = Movement.values[json['movement']],
        createdDate = DateTime.tryParse(json['createdDate']) ?? DateTime.now();
}
