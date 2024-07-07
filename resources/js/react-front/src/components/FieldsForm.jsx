import React, { useState } from 'react'

function FieldsForm() {
    const [tableName, setTableName] = useState('');
    const [inputFields, setInputFields] = useState([
        {
            name: '',
            type: '',
            size: null,
            index: null,
            default: null,
            nullable: 0,
            unsigned: 0,
        }
    ]);

    const handleTableNameChange = (event) => {
        setTableName(event.target.value);
    }
    const handleFieldChange = (index, event) => {
        const field = event.target.name;
        const newFields = [...inputFields];
        newFields[index][field] = event.target.value;
        setInputFields(newFields);
    }

    const handleAddFields = () => {
        const newFields = {
            name: '',
            type: '',
            size: null,
            index: null,
            default: null,
            nullable: false,
            unsigned: false,
        };
        setInputFields([...inputFields, newFields]);
    };

    const handleDeleteFields = (index) => {
        const newFields = [...inputFields];
        newFields.splice(index, 1);
        setInputFields(newFields);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch("api/createTable", {
            method: "POST",
            body: JSON.stringify({
                tableName: tableName,
                inputFields: inputFields,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });

        setTableName(null);
        setInputFields([
            {
                name: '',
                type: '',
                size: null,
                index: null,
                default: null,
                nullable: false,
                unsigned: false,
            }
        ]);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="table_name" className="form-label">Table Name</label>
                <input
                    value={tableName || ''}
                    onChange={event => handleTableNameChange(event)}
                    type="text"
                    className="form-control"
                    id="table_name"
                />
            </div>

            {inputFields.map((input, index) => {
                return (
                    <div key={index}>
                        <div className="row g-3 align-items-center justify-content-between">
                            <div className="col-auto mb-3">
                                <label htmlFor="name" className="form-label">Field Name</label>
                                <input
                                    value={input.name}
                                    name='name'
                                    onChange={event => handleFieldChange(index, event)}
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    required
                                />
                            </div>

                            <div className="col-auto mb-3">
                                <label htmlFor="type" className="form-label">Field Type</label>
                                <select
                                    defaultValue={''}
                                    className="form-select"
                                    value={input.type}
                                    name="type"
                                    onChange={event => handleFieldChange(index, event)}
                                    required
                                >
                                    <option value='' disabled>Select field type</option>
                                    <option value="increments">Increments</option>
                                    <option value="string">String</option>
                                    <option value="integer">Integer</option>
                                </select>
                            </div>

                            <div className="col-auto mb-3">
                                <label htmlFor="size" className="form-label">Field size</label>
                                <input
                                    value={input.size}
                                    onChange={event => handleFieldChange(index, event)}
                                    type="number"
                                    name='size'
                                    className="form-control"
                                    id="size"
                                    min={0}
                                    max={255}
                                />
                            </div>

                            <div className="col-auto mb-3">
                                <label htmlFor="index" className="form-label">Index</label>
                                <select
                                    defaultValue={''}
                                    className="form-select"
                                    value={input.index}
                                    name="index"
                                    onChange={event => handleFieldChange(index, event)}
                                >
                                    <option value='' disabled>Select index type</option>
                                    <option value="unique">Unique</option>
                                    <option value="index">Index</option>
                                    <option value="primary">Primary</option>
                                </select>
                            </div>


                            <div className="col-auto mb-3">
                                <label htmlFor="default" className="form-label">Default value</label>
                                <input
                                    value={input.default}
                                    onChange={event => handleFieldChange(index, event)}
                                    type="text"
                                    name='default'
                                    className="form-control"
                                    id="default"
                                />
                            </div>
                        </div>

                        <div className="row g-3 align-items-center">
                            <div className="col-auto mb-3 form-check">
                                <input
                                    checked={input.nullable}
                                    onChange={event => handleFieldChange(index, event)}
                                    type="checkbox"
                                    name='nullable'
                                    className="form-check-input"
                                    id="nullable"
                                />
                                <label className="form-check-label" htmlFor="nullable">Nullable</label>
                            </div>

                            <div className="col-auto mb-3 form-check">
                                <input
                                    checked={input.unsigned}
                                    onChange={event => handleFieldChange(index, event)}
                                    type="checkbox"
                                    name='unsigned'
                                    className="form-check-input"
                                    id="unsigned"
                                />
                                <label className="form-check-label" htmlFor="unsigned">Unsigned</label>
                            </div>

                            <div className="col-auto mb-3">
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDeleteFields(index)}
                                >
                                    Delete Fields
                                </button>
                            </div>

                        </div>
                    </div>
                )
            })}
            <div className="row g-3 align-items-center">
                <div className="col-auto mb-3">
                    <button className="btn btn-success" onClick={handleAddFields}>Add Fields</button>
                </div>
            </div>
            <div className="row g-3 align-items-center">
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </div>
        </form>
    )
}

export default FieldsForm
