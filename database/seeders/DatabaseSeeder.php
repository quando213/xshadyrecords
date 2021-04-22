<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Stancl\Tenancy\Database\Models\Domain;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            TenantSeeder::class,
            DomainSeeder::class,
            UserSeeder::class,
            ClientSeeder::class,
            CategorySeeder::class,
            ServiceSeeder::class,
            LandlordSeeder::class,
            TechnicianSeeder::class,
            BusinessHoursSeeder::class,
            WorkingHoursSeeder::class,
            AppointmentSeeder::class,
            AppointmentDetailSeeder::class,
            TechnicianCategorySeeder::class,
            DiscountSeeder::class,
            RatePointSeeder::class
        ]);
        // \App\Models\User::factory(10)->create();
    }
}