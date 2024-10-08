SELECT 
    c.country_name,
    COUNT(i.id) AS total_invoices,
    AVG(i.total_price) AS average_invoice
FROM 
    invoice i
JOIN 
    customer cu ON i.customer_id = cu.id
JOIN 
    city ci ON cu.city_id = ci.id
JOIN 
    country c ON ci.country_id = c.id
GROUP BY 
    c.country_name
HAVING 
    AVG(i.total_price) > (
        SELECT AVG(total_price) 
        FROM invoice
    )
ORDER BY 
    average_invoice DESC;
