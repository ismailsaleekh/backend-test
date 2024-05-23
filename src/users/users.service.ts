import { Injectable } from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class UserService {
    private pool: Pool;

    constructor() {
        this.pool = new Pool({
            host: process.env.DATABASE_HOST,
            port: Number(process.env.DATABASE_PORT),
            user: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASS,
            database: process.env.DATABASE_NAME,
        });
    }

    async deductBalance(userId: number, amount: number): Promise<void> {
        const client = await this.pool.connect();
        try {
            await client.query('BEGIN');
            const res = await client.query('SELECT balance FROM users WHERE id = $1', [userId]);
            const balance = res.rows[0].balance;

            if (balance < amount) {
                throw new Error('Insufficient balance');
            }

            await client.query('UPDATE users SET balance = balance - $1 WHERE id = $2', [amount, userId]);
            await client.query('COMMIT');
        } catch (e) {
            await client.query('ROLLBACK');
            throw e;
        } finally {
            client.release();
        }
    }
}
