package com.example;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class MyServiceTest {

    @Test
    public void testExternalApi() {
        // Create a mock of the ExternalApi
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        // Stub the getData() method to return "Mock Data"
        when(mockApi.getData()).thenReturn("Mock Data");

        // Inject the mock into the service
        MyService service = new MyService(mockApi);

        // Call the method and check the result
        String result = service.fetchData();
        assertEquals("Mock Data", result);
    }
}
