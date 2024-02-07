import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:inventory/domain/entities/inventory.dart';
import 'package:inventory/services/local_storage_service.dart';

class InventoryController {
  final TextEditingController idProductController = TextEditingController();
  final TextEditingController amountController = TextEditingController();
}

class InventoryList extends AutoDisposeAsyncNotifier<List<Inventory>> {
  @override
  Future<List<Inventory>> build() async {
    final encodedData = LocalStorageService().getItem('inventory');

    List<Map<String, dynamic>> data = List.from(encodedData ?? []);

    List<Inventory> listInventory =
        data.map((e) => Inventory.fromJson(e)).toList();

    state = AsyncData(listInventory);

    return listInventory;
  }

  Future<void> addInventory(Inventory inventory) async {
    if (!productExists(inventory.idProduct)) return;

    final encodedData = LocalStorageService().getItem('inventory');

    List<Map<String, dynamic>> data = List.from(encodedData ?? []);

    List<Inventory> listInventory =
        data.map((e) => Inventory.fromJson(e)).toList();

    listInventory.add(inventory);

    LocalStorageService()
        .setItem('inventory', listInventory.map((e) => e.toJson()).toList());

    state = AsyncData(listInventory);
  }

  bool productExists(int idProduct) {
    final encodedData = LocalStorageService().getItem('products');

    List<Map<String, dynamic>> data = List.from(encodedData ?? []);

    return data.where((element) => element['id'] == idProduct).isNotEmpty;
  }
}

final inventoryProvider =
    AsyncNotifierProvider.autoDispose<InventoryList, List<Inventory>>(
        InventoryList.new);
