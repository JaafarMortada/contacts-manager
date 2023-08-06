<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
// use Illuminate\Support\Facades\Hash;
// use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {   
        for ($i = 0; $i < 153; $i++) {
            DB::table('contacts')->insert([
                'name' => 'Contact' . $i,
                'phone_number' => '+'.rand(0, 9) . rand(0, 9). rand(0, 9). rand(0, 9). rand(0, 9). rand(0, 9). rand(0, 9). rand(0, 9) ,
                'latitude' => rand(-1, 55) ,
                'longitude' => rand(-1, 55) ,
            ]);
    }
    }
}