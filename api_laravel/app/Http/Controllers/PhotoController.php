<?php

namespace App\Http\Controllers;


use stdClass;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Photos;

class PhotoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $photos = Photos::all();
        return response()->json($photos);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|max:10|', 
            'description' => 'required|min:5|'
        ], [
            'title.required' => 'Le titre est obligatoire', 
            'title.max' => 'Le titre ne doit pas depasser 10 caractere', 
            'description.required' => 'Le description est obligatoire', 
            'description.min' => 'Le description doit avoir au minimum 5 caractere '
        ]);

        if($validator->fails()){
            return response()->json(['errors' => $validator->errors()]);
        } else {
            // $photo = new stdClass;
            // $photo->title = $request->input('title');
            // $photo->description = $request->input('description');
            // return response()->json($photo);
            Photos::create([
                'title' => $request->input('title'), 
                'description' => $request->input('description')
            ]);
            return response()->json(['success' => 'Photo enregistré']);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
