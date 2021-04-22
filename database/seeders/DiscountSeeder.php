<?php


namespace Database\Seeders;

use App\Enums\Unit;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class DiscountSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('discounts')->insret([
            [
                'tenant_id' => 'Quan',
                'title' => 'Discount for Spring',
                'code' => 'spring2022',
                'unit' => Unit::AMOUNT,
                'usage_limit' => 20,
                'amount' => 20,
                'created_at' => Carbon::now()
            ],
            [
                'tenant_id' => 'Phuong',
                'title' => 'Discount for Summer',
                'code' => 'summer2020',
                'unit' => Unit::PERCENTAGE,
                'usage_limit' => 20,
                'amount' => 50,
                'created_at' => Carbon::now()
            ],
            [
                'tenant_id' => 'hinh',
                'title' => 'Discount for Autumn',
                'code' => 'autumn',
                'unit' => Unit::AMOUNT,
                'usage_limit' => 20,
                'amount' => 50,
                'created_at' => Carbon::now()
            ],
            [
                'tenant_id' => 'thang',
                'title' => 'Discount for Winter',
                'code' => 'winter',
                'unit' => Unit::PERCENTAGE,
                'usage_limit' => 20,
                'amount' => 50,
                'created_at' => Carbon::now()
            ],
            [
                'tenant_id' => 'thuan',
                'title' => 'Discount for 30/04 01/05',
                'code' => '30/04 01/05',
                'unit' => Unit::PERCENTAGE,
                'usage_limit' => 20,
                'amount' => 50,
                'created_at' => Carbon::now()
            ],
            [
                'tenant_id' => 'Hoang',
                'title' => 'Discount for End of the year 2020',
                'code' => 'End of the year',
                'unit' => Unit::AMOUNT,
                'usage_limit' => 20,
                'amount' => 50,
                'created_at' => Carbon::now()
            ],
            [
                'tenant_id' => 'Thuy',
                'title' => 'Discount for the begin of the year 2020',
                'code' => 'the begin of the year',
                'unit' => Unit::PERCENTAGE,
                'usage_limit' => 20,
                'amount' => 60,
                'created_at' => Carbon::now()
            ],
            [
                'tenant_id' => 'Vy',
                'title' => 'Discount for birthday',
                'code' => 'birthday',
                'unit' => Unit::AMOUNT,
                'usage_limit' => 20,
                'amount' => 80,
                'created_at' => Carbon::now()
            ],
            [
                'tenant_id' => 'Yen',
                'title' => 'Discount for opening',
                'code' => 'opening',
                'unit' => Unit::AMOUNT,
                'usage_limit' => 20,
                'amount' => 40,
                'created_at' => Carbon::now()
            ],
            [
                'tenant_id' => 'Van',
                'title' => 'Discount for International Women.s Day',
                'code' => 'International Women.s Day',
                'unit' => Unit::PERCENTAGE,
                'usage_limit' => 20,
                'amount' => 40,
                'created_at' => Carbon::now()
            ],
            [
                'tenant_id' => 'Tu',
                'title' => 'Discount for 10 years passed',
                'code' => '10 years passed',
                'unit' => Unit::PERCENTAGE,
                'usage_limit' => 20,
                'amount' => 10,
                'created_at' => Carbon::now()
            ],
            [
                'tenant_id' => 'Tuyet',
                'title' => 'Discount for 08/03',
                'code' => '08/03',
                'unit' => Unit::AMOUNT,
                'usage_limit' => 20,
                'amount' => 90,
                'created_at' => Carbon::now()
            ],
            [
                'tenant_id' => 'Hien',
                'title' => 'Discounts for students',
                'code' => 'students',
                'unit' => Unit::AMOUNT,
                'usage_limit' => 10,
                'amount' => 40,
                'created_at' => Carbon::now()
            ],
            [
                'tenant_id' => 'Thu',
                'title' => 'Discounts for women',
                'code' => 'women',
                'unit' => Unit::PERCENTAGE,
                'usage_limit' => 5,
                'amount' => 50,
                'created_at' => Carbon::now()
            ],
            [
                'tenant_id' => 'Huyen',
                'title' => 'Discounts for Student discounts',
                'code' => 'Student discounts',
                'unit' => Unit::AMOUNT,
                'usage_limit' => 8,
                'amount' => 38,
                'created_at' => Carbon::now()
            ],
            [
                'tenant_id' => 'Bong',
                'title' => 'Discounts for Thunderstorm season',
                'code' => 'Thunderstorm season',
                'unit' => Unit::AMOUNT,
                'usage_limit' => 10,
                'amount' => 90,
                'created_at' => Carbon::now()
            ],
            [
                'tenant_id' => 'Lan',
                'title' => 'Discounts for Tet day',
                'code' => 'Tet day',
                'unit' => Unit::PERCENTAGE,
                'usage_limit' => 4,
                'amount' => 20,
                'created_at' => Carbon::now()
            ],
            [
                'tenant_id' => 'Nga',
                'title' => 'Discounts for 09/10',
                'code' => '09/10',
                'unit' => Unit::PERCENTAGE,
                'usage_limit' => 8,
                'amount' => 40,
                'created_at' => Carbon::now()
            ],
            [
                'tenant_id' => 'Oanh',
                'title' => 'Discounts for 06/05',
                'code' => '06/05',
                'unit' => Unit::AMOUNT,
                'usage_limit' => 20,
                'amount' => 60,
                'created_at' => Carbon::now()
            ],
            [
                'tenant_id' => 'Lien',
                'title' => 'Discounts for 20/12',
                'code' => '20/12',
                'unit' => Unit::PERCENTAGE,
                'usage_limit' => 10,
                'amount' => 50,
                'created_at' => Carbon::now()
            ],
            [
                'tenant_id' => 'Hoai',
                'title' => 'Discount for Spring',
                'code' => 'spring2022',
                'unit' => Unit::AMOUNT,
                'usage_limit' => 20,
                'amount' => 20,
                'created_at' => Carbon::now()
            ],
            [
                'tenant_id' => 'Ngoc',
                'title' => 'Discount for Summer',
                'code' => 'summer2020',
                'unit' => Unit::PERCENTAGE,
                'usage_limit' => 20,
                'amount' => 50,
                'created_at' => Carbon::now()
            ],
            [
                'tenant_id' => 'Linh',
                'title' => 'Discount for Autumn',
                'code' => 'autumn',
                'unit' => Unit::AMOUNT,
                'usage_limit' => 20,
                'amount' => 50,
                'created_at' => Carbon::now()
            ],
            [
                'tenant_id' => 'Bich',
                'title' => 'Discount for Winter',
                'code' => 'winter',
                'unit' => Unit::PERCENTAGE,
                'usage_limit' => 20,
                'amount' => 50,
                'created_at' => Carbon::now()
            ],
            [
                'tenant_id' => 'Ly',
                'title' => 'Discount for 30/04 01/05',
                'code' => '30/04 01/05',
                'unit' => Unit::PERCENTAGE,
                'usage_limit' => 20,
                'amount' => 50,
                'created_at' => Carbon::now()
            ],
            [
                'tenant_id' => 'Phuong',
                'title' => 'Discount for End of the year 2020',
                'code' => 'End of the year',
                'unit' => Unit::AMOUNT,
                'usage_limit' => 20,
                'amount' => 50,
                'created_at' => Carbon::now()
            ],
            [
                'tenant_id' => 'Trang',
                'title' => 'Discount for the begin of the year 2020',
                'code' => 'the begin of the year',
                'unit' => Unit::PERCENTAGE,
                'usage_limit' => 20,
                'amount' => 60,
                'created_at' => Carbon::now()
            ],
            [
                'tenant_id' => 'Men',
                'title' => 'Discount for birthday',
                'code' => 'birthday',
                'unit' => Unit::AMOUNT,
                'usage_limit' => 20,
                'amount' => 80,
                'created_at' => Carbon::now()
            ],
            [
                'tenant_id' => 'Trinh',
                'title' => 'Discount for opening',
                'code' => 'opening',
                'unit' => Unit::AMOUNT,
                'usage_limit' => 20,
                'amount' => 40,
                'created_at' => Carbon::now()
            ],
            [
                'tenant_id' => 'Duc',
                'title' => 'Discount for International Women.s Day',
                'code' => 'International Women.s Day',
                'unit' => Unit::PERCENTAGE,
                'usage_limit' => 20,
                'amount' => 40,
                'created_at' => Carbon::now()
            ],
            [
                'tenant_id' => 'Tien',
                'title' => 'Discount for 10 years passed',
                'code' => '10 years passed',
                'unit' => Unit::PERCENTAGE,
                'usage_limit' => 20,
                'amount' => 10,
                'created_at' => Carbon::now()
            ],
            [
                'tenant_id' => 'Dan',
                'title' => 'Discount for 08/03',
                'code' => '08/03',
                'unit' => Unit::AMOUNT,
                'usage_limit' => 20,
                'amount' => 90,
                'created_at' => Carbon::now()
            ],
            [
                'tenant_id' => 'Doan',
                'title' => 'Discounts for students',
                'code' => 'students',
                'unit' => Unit::AMOUNT,
                'usage_limit' => 10,
                'amount' => 40,
                'created_at' => Carbon::now()
            ],
            [
                'tenant_id' => 'Do',
                'title' => 'Discounts for women',
                'code' => 'women',
                'unit' => Unit::PERCENTAGE,
                'usage_limit' => 5,
                'amount' => 50,
                'created_at' => Carbon::now()
            ],
            [
                'tenant_id' => 'Duong',
                'title' => 'Discounts for Student discounts',
                'code' => 'Student discounts',
                'unit' => Unit::AMOUNT,
                'usage_limit' => 8,
                'amount' => 38,
                'created_at' => Carbon::now()
            ],
            [
                'tenant_id' => 'Dung',
                'title' => 'Discounts for Thunderstorm season',
                'code' => 'Thunderstorm season',
                'unit' => Unit::AMOUNT,
                'usage_limit' => 10,
                'amount' => 90,
                'created_at' => Carbon::now()
            ],
            [
                'tenant_id' => 'Hung',
                'title' => 'Discounts for Tet day',
                'code' => 'Tet day',
                'unit' => Unit::PERCENTAGE,
                'usage_limit' => 4,
                'amount' => 20,
                'created_at' => Carbon::now()
            ],
            [
                'tenant_id' => 'Luyen',
                'title' => 'Discounts for 09/10',
                'code' => '09/10',
                'unit' => Unit::PERCENTAGE,
                'usage_limit' => 8,
                'amount' => 40,
                'created_at' => Carbon::now()
            ],
            [
                'tenant_id' => 'Anh',
                'title' => 'Discounts for 06/05',
                'code' => '06/05',
                'unit' => Unit::AMOUNT,
                'usage_limit' => 20,
                'amount' => 60,
                'created_at' => Carbon::now()
            ],
            [
                'tenant_id' => 'Minh',
                'title' => 'Discounts for 20/12',
                'code' => '20/12',
                'unit' => Unit::PERCENTAGE,
                'usage_limit' => 10,
                'amount' => 50,
                'created_at' => Carbon::now()
            ],

        ]);
    }
}