import './uiInput.css'

function UiTextarea({ placeholder, type, setState, state }) {
    return (
        <div className="ui-input">
            <textarea type={type}
                placeholder={placeholder}
                value={state}
                onChange={(e) => setState(e.target.value)}>
            </textarea>
        </div>
    );
}

export default UiTextarea;
