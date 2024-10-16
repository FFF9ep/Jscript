WITH transaction_sequences AS (
    SELECT 
        sender,
        dt AS sequence_start,
        amount,
        LEAD(dt) OVER (PARTITION BY sender ORDER BY dt) AS next_transaction,
        SUM(amount) OVER (PARTITION BY sender ORDER BY dt 
                          ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_sum,
        COUNT(*) OVER (PARTITION BY sender ORDER BY dt 
                       ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS transactions_count,
        dt AS sequence_end
    FROM transactions
),
grouped_transactions AS (
    SELECT
        sender,
        MIN(sequence_start) AS sequence_start,
        MAX(sequence_end) AS sequence_end,
        COUNT(amount) AS transactions_count,
        SUM(amount) AS transactions_sum
    FROM transaction_sequences
    WHERE next_transaction IS NOT NULL 
          AND TIMESTAMPDIFF(HOUR, sequence_start, next_transaction) <= 1
    GROUP BY sender, sequence_start, sequence_end
)
SELECT
    sender,
    sequence_start,
    sequence_end,
    transactions_count,
    transactions_sum
FROM grouped_transactions
WHERE transactions_sum >= 150
ORDER BY sender, sequence_start, sequence_end;
