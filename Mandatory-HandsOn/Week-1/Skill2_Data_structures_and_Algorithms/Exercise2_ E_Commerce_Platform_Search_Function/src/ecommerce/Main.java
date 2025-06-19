package ecommerce;

public class Main {
    public static void main(String[] args) {
        Product[] products = {
                new Product(103, "Laptop", "Electronics"),
                new Product(101, "Shampoo", "Personal Care"),
                new Product(104, "Notebook", "Stationery"),
                new Product(102, "Smartphone", "Electronics")
        };

        // Test Linear Search
        System.out.println("🔍 Linear Search (ID = 104):");
        Product result1 = SearchUtils.linearSearch(products, 104);
        System.out.println(result1 != null ? result1 : "Product not found");

        // Sort for Binary Search
        SearchUtils.sortProductsById(products);

        // Test Binary Search
        System.out.println("\n🔍 Binary Search (ID = 101):");
        Product result2 = SearchUtils.binarySearch(products, 101);
        System.out.println(result2 != null ? result2 : "Product not found");

        // Test Binary Search for missing ID
        System.out.println("\n🔍 Binary Search (ID = 999):");
        Product result3 = SearchUtils.binarySearch(products, 999);
        System.out.println(result3 != null ? result3 : "Product not found");
    }
}
