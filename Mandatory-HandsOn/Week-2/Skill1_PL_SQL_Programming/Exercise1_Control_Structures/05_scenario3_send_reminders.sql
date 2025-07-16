-- Scenario 3: Print reminders for loans due in next 30 days

BEGIN
  FOR rec IN (
    SELECT l.LoanID, l.DueDate, c.Name
    FROM LOANS l
    JOIN CUSTOMERS c ON l.CustomerID = c.CustomerID
    WHERE l.DueDate BETWEEN SYSDATE AND SYSDATE + 30
  ) LOOP
    DBMS_OUTPUT.PUT_LINE(
      'Reminder: Loan ID ' || rec.LoanID ||
      ' for customer ' || rec.Name ||
      ' is due on ' || TO_CHAR(rec.DueDate, 'DD-MON-YYYY')
    );
  END LOOP;
END;
/
