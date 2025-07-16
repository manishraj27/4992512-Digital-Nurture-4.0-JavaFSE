CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
  p_DepartmentID NUMBER,
  p_BonusPercent NUMBER
) IS
BEGIN
  UPDATE EMPLOYEES
  SET Salary = Salary + (Salary * (p_BonusPercent / 100))
  WHERE DepartmentID = p_DepartmentID;

  COMMIT;
END;
/
