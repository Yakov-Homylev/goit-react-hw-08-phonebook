import React, { useState, useEffect } from "react";
import ContactItem from "./ContactItem";
import { List, Notification } from "./ContactList.styled";
import { useGetContactsQuery } from "../../redux/contacts/contacts";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../Loader/Loader";
import { filter } from "../../redux/filter/filter-action";

export default function ContactList() {
  const { data, isLoading } = useGetContactsQuery();
  const filterQuery = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const [deleted, setDeleted] = useState(false);

  let visibleContacts = [];

  if (!isLoading) {
    visibleContacts = data.filter(contact =>
      contact.name.toLowerCase().includes(filterQuery)
    );
  }

  const isContactsNotEmpty = visibleContacts && visibleContacts.length > 0;
  const clearFilterValue =
    visibleContacts.length === 0 && !isLoading && deleted;

  useEffect(() => {
    if (clearFilterValue) {
      dispatch(filter(""));
      setDeleted(false);
    }
  }, [clearFilterValue, dispatch]);

  return (
    <List>
      {isLoading && <Loader />}
      {isContactsNotEmpty ? (
        visibleContacts.map(el => {
          return (
            <ContactItem
              key={el.id}
              id={el.id}
              name={el.name}
              number={el.phone}
              setDeleted={setDeleted}
            />
          );
        })
      ) : (
        <Notification>This list is empty</Notification>
      )}
    </List>
  );
}
