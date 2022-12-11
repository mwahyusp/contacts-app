import React from "react";

class ContactInput extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi state
    this.state = {
      name: "",
      tag: "",
    };

    this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
    this.onTagChangeEventHandler = this.onTagChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onNameChangeEventHandler(event) {
    this.setState(() => {
      return {
        name: event.target.value,
      };
    });
  }

  onTagChangeEventHandler(event) {
    this.setState(() => {
      return {
        tag: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addContact(this.state);
  }

  render() {
    return (
      <form className="contact-input" onSubmit={this.onSubmitEventHandler}>
        <input
          type="text"
          placeholder="Nama Kontak"
          value={this.state.name}
          onChange={this.onNameChangeEventHandler}
        />{" "}
        {this.state.name === "" && (
          <div className="redText">Please enter your name</div>
        )}
        <input
          type="text"
          placeholder="Tag Nama Kontak"
          value={this.state.tag}
          onChange={this.onTagChangeEventHandler}
        />
        {this.state.tag === "" && (
          <div className="redText">Please enter tag</div>
        )}
        <button
          type="submit"
          disabled={this.state.name === "" || this.state.tag === ""}
        >
          <i class="fa-solid fa-user-plus"> </i> Tambah{" "}
        </button>{" "}
      </form>
    );
  }
}

export default ContactInput;
