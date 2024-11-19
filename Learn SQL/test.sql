BEGIN;


-- Drop the table
DROP TABLE test;

-- Rollback to undo the drop
ROLLBACK;

-- Check if the table exists
SELECT * FROM test; -- The table and data are still there after rollback


