<?php

namespace App\Http\Controllers;

use App\Models\StudentInfo;
use Illuminate\Http\Request;

class GetItem extends Controller
{
    public function getItemById($id, $roll){
        $data = StudentInfo::where('id', '=', $id)
        ->where('roll', '=', $roll)
        ->get();
        return $data;
    }
}
