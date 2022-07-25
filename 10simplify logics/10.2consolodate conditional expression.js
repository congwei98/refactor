// “有时我会发现这样一串条件检查：检查条件各不相同，最终行为却一致。如果发现这种情况，就应该使用“逻辑或”和“逻辑与”将它们合并为一个条件表达式。”

if (anEmployee.onVacation)
    if (anEmployee.seniority > 10)
        return 1;
return 0.5;


if ((anEmployee.onVacation)
    && (anEmployee.seniority > 10)) return 1;
return 0.5;
