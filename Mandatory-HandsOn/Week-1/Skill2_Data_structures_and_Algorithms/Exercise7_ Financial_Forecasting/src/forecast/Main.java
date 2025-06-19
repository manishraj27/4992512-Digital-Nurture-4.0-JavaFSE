package forecast;

public class Main {
    public static void main(String[] args) {
        double initialInvestment = 10000;
        double annualGrowthRate = 0.08; // 8%
        int forecastYears = 5;

        // Recursive prediction
        double recursiveResult = ForecastCalculator.futureValueRecursive(initialInvestment, annualGrowthRate, forecastYears);
        System.out.printf("🔁 Recursive Future Value after %d years: ₹%.2f%n", forecastYears, recursiveResult);

        // Memoized prediction
        double optimizedResult = ForecastCalculator.futureValueMemoized(initialInvestment, annualGrowthRate, forecastYears);
        System.out.printf("⚡ Optimized Future Value after %d years: ₹%.2f%n", forecastYears, optimizedResult);
    }
}
