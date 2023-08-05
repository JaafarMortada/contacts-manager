<?php

namespace App\Http\Controllers;
use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ContactController extends Controller
{
    function addOrUpdateContact(Request $request, $id = "add"){
        if($id == "add"){
            $contact = new Contact;
        }else{
            $contact = Contact::find($id);
        }

        $contact->name = $request->name ? $request->name : $contact->name;
        $contact->user_id = Auth::id();
        $contact->phone_number = $request->phone_number ? $request->phone_number : $contact->phone_number;
        $contact->latitude = $request->latitude ? $request->latitude : $contact->latitude;
        $contact->longitude = $request->longitude ? $request->longitude : $contact->longitude;
        $contact->save();

        return response()->json(["contact" => $contact]);
    }

    function getContacts(){
        $contacts = Contact::all();
        return response()->json(["contacts" => $contacts]);
    }

    function deleteContact($id){
        $contact = Contact::find($id)->delete();
        return response()->json(["success" => true]);
    }
}
