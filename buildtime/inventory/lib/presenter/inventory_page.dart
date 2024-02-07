import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:inventory/domain/entities/inventory.dart';
import 'package:inventory/domain/entities/movement_enum.dart';
import 'package:inventory/presenter/inventory_controller.dart';

class InventoryPage extends ConsumerStatefulWidget {
  const InventoryPage({super.key});

  @override
  ConsumerState<InventoryPage> createState() => _ProductPageState();
}

class _ProductPageState extends ConsumerState<InventoryPage> {
  final InventoryController _inventoryController = InventoryController();

  @override
  Widget build(BuildContext context) {
    final inventoryList = ref.watch(inventoryProvider);

    return Padding(
      padding: const EdgeInsets.all(24),
      child: Container(
        constraints: const BoxConstraints(maxWidth: 500),
        child: Card(
          child: Padding(
            padding: const EdgeInsets.all(24.0),
            child: Column(
              children: [
                const Text('Inventory Registration'),
                const SizedBox(height: 8),
                Form(
                    child: Column(
                  children: [
                    Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: TextFormField(
                          controller: _inventoryController.idProductController,
                          maxLength: 18,
                          inputFormatters: [
                            FilteringTextInputFormatter.digitsOnly
                          ],
                          keyboardType: TextInputType.number,
                          decoration: InputDecoration(
                              border: OutlineInputBorder(
                                  borderRadius: BorderRadius.circular(8)),
                              labelText: 'Product Id')),
                    ),
                    Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: TextFormField(
                          controller: _inventoryController.amountController,
                          maxLength: 16,
                          inputFormatters: [
                            FilteringTextInputFormatter.allow(
                                RegExp(r"^-?[0-9.]*")),
                          ],
                          keyboardType: TextInputType.number,
                          decoration: InputDecoration(
                              border: OutlineInputBorder(
                                  borderRadius: BorderRadius.circular(8)),
                              labelText: 'Product Amount')),
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
                            double amount = double.tryParse(_inventoryController
                                    .amountController.text) ??
                                0;

                            final inventory = Inventory(
                                id: 0,
                                amount: amount,
                                createdDate: DateTime.now(),
                                idProduct: int.tryParse(_inventoryController
                                        .idProductController.text) ??
                                    0,
                                movement:
                                    amount > 0 ? Movement.mIn : Movement.mOut);

                            await ref
                                .read(inventoryProvider.notifier)
                                .addInventory(inventory);
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
                      child: Text('PRODUCT ID'),
                    ),
                    Expanded(
                      flex: 2,
                      child: Text('AMOUNT'),
                    ),
                    Expanded(
                      child: Text('CREATED AT'),
                    ),
                  ],
                ),
                const SizedBox(height: 16),
                if (!inventoryList.isLoading &&
                    inventoryList.valueOrNull != null)
                  Flexible(
                    child: ListView.builder(
                        shrinkWrap: true,
                        itemCount: inventoryList.valueOrNull?.length ?? 0,
                        itemBuilder: (context, index) => Padding(
                              padding:
                                  const EdgeInsets.symmetric(vertical: 8.0),
                              child: Row(
                                children: [
                                  Expanded(
                                    child: Text(inventoryList
                                            .valueOrNull?[index].idProduct
                                            .toString() ??
                                        ''),
                                  ),
                                  Expanded(
                                    flex: 2,
                                    child: Text(inventoryList
                                            .valueOrNull?[index].amount
                                            .toString() ??
                                        ''),
                                  ),
                                  Expanded(
                                    child: Text(inventoryList
                                            .valueOrNull?[index].createdDate
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
