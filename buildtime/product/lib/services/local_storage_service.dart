import 'package:localstorage/localstorage.dart';

class LocalStorageService {
  late final LocalStorage _localStorage;

  static final LocalStorageService _instance = LocalStorageService._internal();

  factory LocalStorageService() {
    return _instance;
  }

  LocalStorageService._internal() {
    _localStorage = LocalStorage('mfa');
  }

  dynamic getItem(String key) {
    return _localStorage.getItem(key);
  }

  Future<void> setItem(String key, dynamic value) {
    return _localStorage.setItem(key, value);
  }
}
