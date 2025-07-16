CREATE OR REPLACE PROCEDURE TransferFunds (
  p_FromAccountID NUMBER,
  p_ToAccountID NUMBER,
  p_Amount NUMBER
) IS
  v_FromBalance NUMBER;
BEGIN
  -- Get source balance
  SELECT Balance INTO v_FromBalance
  FROM ACCOUNTS
  WHERE AccountID = p_FromAccountID;

  IF v_FromBalance < p_Amount THEN
    RAISE_APPLICATION_ERROR(-20001, 'Insufficient funds.');
  ELSE
    UPDATE ACCOUNTS
    SET Balance = Balance - p_Amount
    WHERE AccountID = p_FromAccountID;

    UPDATE ACCOUNTS
    SET Balance = Balance + p_Amount
    WHERE AccountID = p_ToAccountID;

    COMMIT;
  END IF;
END;
/
