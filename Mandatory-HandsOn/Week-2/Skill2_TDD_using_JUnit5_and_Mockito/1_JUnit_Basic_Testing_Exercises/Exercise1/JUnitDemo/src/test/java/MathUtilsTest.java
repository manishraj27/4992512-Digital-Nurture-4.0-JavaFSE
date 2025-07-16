import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class MathUtilsTest {

    private MathUtils mathUtils;

    @Before
    public void setUp() {
        mathUtils = new MathUtils();
        System.out.println("Setup: New MathUtils instance created.");
    }

    @After
    public void tearDown() {
        mathUtils = null;
        System.out.println("Teardown: MathUtils instance cleared.");
    }

    @Test
    public void testMultiply() {
        // Arrange
        int a = 4;
        int b = 5;

        // Act
        int result = mathUtils.multiply(a, b);

        // Assert
        assertEquals(20, result);
    }

    @Test
    public void testDivide() {
        // Arrange
        int a = 10;
        int b = 2;

        // Act
        int result = mathUtils.divide(a, b);

        // Assert
        assertEquals(5, result);
    }

    @Test(expected = IllegalArgumentException.class)
    public void testDivideByZero() {
        // Arrange
        int a = 10;
        int b = 0;

        // Act
        mathUtils.divide(a, b);

        // Assert handled by expected exception
    }
}
