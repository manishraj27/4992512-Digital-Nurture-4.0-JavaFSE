-- Scenario 1: Apply 1% interest discount for customers older than 60

BEGIN
  FOR rec IN (
    SELECT l.LoanID
    FROM LOANS l
    JOIN CUSTOMERS c ON l.CustomerID = c.CustomerID
    WHERE c.Age > 60
  ) LOOP
    UPDATE LOANS
    SET InterestRate = InterestRate - 1
    WHERE LoanID = rec.LoanID;
  END LOOP;

  COMMIT;
END;
/
