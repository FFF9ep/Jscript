SELECT 
    c.algorithm AS algorithm,
    COALESCE(SUM(CASE 
        WHEN MONTH(t.dt) BETWEEN 1 AND 3 THEN t.volume 
        ELSE 0 END), 0) AS transactions_Q1,
    COALESCE(SUM(CASE 
        WHEN MONTH(t.dt) BETWEEN 4 AND 6 THEN t.volume 
        ELSE 0 END), 0) AS transactions_Q2,
    COALESCE(SUM(CASE 
        WHEN MONTH(t.dt) BETWEEN 7 AND 9 THEN t.volume 
        ELSE 0 END), 0) AS transactions_Q3,
    COALESCE(SUM(CASE 
        WHEN MONTH(t.dt) BETWEEN 10 AND 12 THEN t.volume 
        ELSE 0 END), 0) AS transactions_Q4
FROM 
    coins c
JOIN 
    transactions t ON c.code = t.coin_code
WHERE 
    YEAR(t.dt) = 2020
GROUP BY 
    c.algorithm
ORDER BY 
    c.algorithm ASC;
