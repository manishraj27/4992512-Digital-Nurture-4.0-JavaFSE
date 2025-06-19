package ecommerce;

import java.util.Arrays;
import java.util.Comparator;

public class SearchUtils {

    // Linear Search
    public static Product linearSearch(Product[] products, int targetId) {
        for (Product product : products) {
            if (product.getProductId() == targetId) {
                return product;
            }
        }
        return null;
    }

    // Binary Search (requires sorted array)
    public static Product binarySearch(Product[] products, int targetId) {
        int low = 0;
        int high = products.length - 1;

        while (low <= high) {
            int mid = (low + high) / 2;
            int midId = products[mid].getProductId();

            if (midId == targetId) {
                return products[mid];
            } else if (midId < targetId) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return null;
    }

    // Utility to sort products by productId (needed for binary search)
    public static void sortProductsById(Product[] products) {
        Arrays.sort(products, new ProductComparator());
    }
}
