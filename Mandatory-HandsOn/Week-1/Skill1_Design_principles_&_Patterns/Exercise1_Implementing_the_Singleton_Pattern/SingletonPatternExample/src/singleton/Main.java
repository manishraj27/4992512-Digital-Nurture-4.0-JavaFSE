package singleton;

public class Main {
    public static void main(String[] args) {
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        logger1.log("This is the first log message.");
        logger2.log("This is the second log message.");

        // Verify both logger instances are the same
        if (logger1 == logger2) {
            System.out.println("Both logger instances are the same (singleton verified).");
        } else {
            System.out.println("Different logger instances exist (singleton failed).");
        }
    }
}

