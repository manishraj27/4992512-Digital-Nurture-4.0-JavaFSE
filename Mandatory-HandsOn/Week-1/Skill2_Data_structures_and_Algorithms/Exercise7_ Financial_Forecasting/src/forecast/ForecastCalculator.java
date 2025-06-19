package forecast;

public class ForecastCalculator {

    // Recursive method to calculate future value
    public static double futureValueRecursive(double initialValue, double rate, int years) {
        if (years == 0) {
            return initialValue;
        }
        return futureValueRecursive(initialValue, rate, years - 1) * (1 + rate);
    }

    // Optimized method using memoization (dynamic programming)
    public static double futureValueMemoized(double initialValue, double rate, int years) {
        double[] memo = new double[years + 1];
        memo[0] = initialValue;

        for (int i = 1; i <= years; i++) {
            memo[i] = memo[i - 1] * (1 + rate);
        }

        return memo[years];
    }
}
