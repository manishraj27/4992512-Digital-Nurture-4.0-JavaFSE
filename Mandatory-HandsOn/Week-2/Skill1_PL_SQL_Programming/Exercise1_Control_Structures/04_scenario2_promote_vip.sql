-- Scenario 2: Promote to VIP if balance > 10,000

BEGIN
  FOR rec IN (
    SELECT CustomerID
    FROM CUSTOMERS
    WHERE Balance > 10000
  ) LOOP
    UPDATE CUSTOMERS
    SET IsVIP = 'TRUE'
    WHERE CustomerID = rec.CustomerID;
  END LOOP;

  COMMIT;
END;
/
