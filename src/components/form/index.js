import * as React from "react";

import * as styles from "./styles.module.scss";

const Form = () => {
  return (
    <div className={styles.formContainer}>
      <h4>Your Details</h4>
      <form className={`${styles.form}`}>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="email" placeholder="Confirm Email" />
        <input type="tel" placeholder="Phone" />
        <input type="tel" placeholder="Confirm Phone Number" />
        <input type="number" placeholder="House Number" />
        <input type="text" placeholder="Postcode" />
        <div className={styles.selectOuter}>
          <select>
            <option defaultValue disabled>Where did you find your ticket?</option>
            <option>Tapi Abbotsinch</option>
            <option>Tapi Aberdeen</option>
            <option>Tapi Abingdon</option>
            <option>Tapi Andover</option>
            <option>Tapi Ashford</option>
            <option>Tapi Ashton Under Lyne</option>
            <option>Tapi Aylesbury</option>
            <option>Tapi Ayr</option>
            <option>Tapi Banbury</option>
            <option>Tapi Barnstaple</option>
            <option>Tapi Basildon</option>
            <option>Tapi Basildon Homebase</option>
            <option>Tapi Basingstoke</option>
            <option>Tapi Basingstoke Homebase</option>
            <option>Tapi Beckton</option>
            <option>Tapi Bedford</option>
            <option>Tapi Bexleyheath</option>
            <option>Tapi Biggleswade Homebase</option>
            <option>Tapi Birmingham Selly Oak</option>
            <option>Tapi Bishops Stortford Homebase</option>
            <option>Tapi Bognor Regis</option>
            <option>Tapi Bolton</option>
            <option>Tapi Bracknell</option>
            <option>Tapi Bradford Homebase</option>
            <option>Tapi Bredbury Homebase</option>
            <option>Tapi Brent Cross</option>
            <option>Tapi Bridgend</option>
            <option>Tapi Bristol</option>
            <option>Tapi Bury St Edmunds</option>
            <option>Tapi Cambridge</option>
            <option>Tapi Cannock</option>
            <option>Tapi Canterbury</option>
            <option>Tapi Cardiff</option>
            <option>Tapi Cardiff Newport Road</option>
            <option>Tapi Carlisle</option>
            <option>Tapi Catford</option>
            <option>Tapi Charlton</option>
            <option>Tapi Chatham</option>
            <option>Tapi Chelmsford Clock Tower</option>
            <option>Tapi Cheltenham</option>
            <option>Tapi Chester</option>
            <option>Tapi Chichester Homebase</option>
            <option>Tapi Chippenham</option>
            <option>Tapi Christchurch</option>
            <option>Tapi Colchester</option>
            <option>Tapi Crawley Queens Square</option>
            <option>Tapi Cromer</option>
            <option>Tapi Croydon</option>
            <option>Tapi Dartford</option>
            <option>Tapi Derby</option>
            <option>Tapi Derby Homebase</option>
            <option>Tapi Doncaster</option>
            <option>Tapi Dundee</option>
            <option>Tapi Dunfermline</option>
            <option>Tapi Durham</option>
            <option>Tapi East Grinstead Homebase</option>
            <option>Tapi East Kilbride</option>
            <option>Tapi Edinburgh Homebase</option>
            <option>Tapi Edmonton</option>
            <option>Tapi Elgin</option>
            <option>Tapi Eltham</option>
            <option>Tapi Enfield</option>
            <option>Tapi Ewell Homebase</option>
            <option>Tapi Exeter</option>
            <option>Tapi Falkirk</option>
            <option>Tapi Fareham Homebase</option>
            <option>Tapi Farnborough</option>
            <option>Tapi Farnham Homebase</option>
            <option>Tapi Folkestone Homebase</option>
            <option>Tapi Fort Kinnaird</option>
            <option>Tapi Gateshead</option>
            <option>Tapi Glasgow</option>
            <option>Tapi Gloucester</option>
            <option>Tapi Godalming Homebase</option>
            <option>Tapi Great Yarmouth</option>
            <option>Tapi Guildford</option>
            <option>Tapi Guiseley</option>
            <option>Tapi Haringey Homebase</option>
            <option>Tapi Harlow</option>
            <option>Tapi Harrogate Homebase</option>
            <option>Tapi Hayes</option>
            <option>Tapi High Wycombe Homebase</option>
            <option>Tapi Horsham</option>
            <option>Tapi Hove</option>
            <option>Tapi Hull</option>
            <option>Tapi Huntingdon</option>
            <option>Tapi Inverness</option>
            <option>Tapi Ipswich</option>
            <option>Tapi Irvine</option>
            <option>Tapi Kings Lynn</option>
            <option>Tapi Kirkcaldy</option>
            <option>Tapi Leamington Spa Homebase</option>
            <option>Tapi Leeds Homebase</option>
            <option>Tapi Leicester</option>
            <option>Tapi Leicester Homebase</option>
            <option>Tapi Livingston</option>
            <option>Tapi Llandudno</option>
            <option>Tapi Llanelli</option>
            <option>Tapi Lowestoft</option>
            <option>Tapi Luton</option>
            <option>Tapi Maidenhead</option>
            <option>Tapi Maidenhead Homebase</option>
            <option>Tapi Maidstone Homebase</option>
            <option>Tapi Milton Keynes</option>
            <option>Tapi New Malden</option>
            <option>Tapi Newport</option>
            <option>Tapi Newton Abbot Homebase</option>
            <option>Tapi Northampton</option>
            <option>Tapi Northampton Homebase</option>
            <option>Tapi Norwich</option>
            <option>Tapi Norwich Homebase</option>
            <option>Tapi Nottingham</option>
            <option>Tapi Nursling</option>
            <option>Tapi Orpington</option>
            <option>Tapi Orpington Homebase</option>
            <option>Tapi Oxford</option>
            <option>Tapi Peckham</option>
            <option>Tapi Penge</option>
            <option>Tapi Perth</option>
            <option>Tapi Peterborough</option>
            <option>Tapi Plymouth</option>
            <option>Tapi Plymouth Homebase</option>
            <option>Tapi Poole</option>
            <option>Tapi Portishead Homebase</option>
            <option>Tapi Portsmouth</option>
            <option>Tapi Preston</option>
            <option>Tapi Rayleigh Weir Homebase</option>
            <option>Tapi Reading</option>
            <option>Tapi Redhill</option>
            <option>Tapi Rugby</option>
            <option>Tapi Rustington</option>
            <option>Tapi Salisbury</option>
            <option>Tapi Sevenoaks Homebase</option>
            <option>Tapi Sheffield</option>
            <option>Tapi Shrewsbury</option>
            <option>Tapi Sittingbourne</option>
            <option>Tapi Slough</option>
            <option>Tapi Solihull</option>
            <option>Tapi South Ruislip</option>
            <option>Tapi St Albans</option>
            <option>Tapi Stevenage</option>
            <option>Tapi Stirling</option>
            <option>Tapi Stockton</option>
            <option>Tapi Stoke</option>
            <option>Tapi Straiton</option>
            <option>Tapi Streatham</option>
            <option>Tapi Sudbury Homebase</option>
            <option>Tapi Swansea</option>
            <option>Tapi Swindon</option>
            <option>Tapi Tamworth</option>
            <option>Tapi Taunton</option>
            <option>Tapi Telford</option>
            <option>Tapi Thanet</option>
            <option>Tapi Thurrock</option>
            <option>Tapi Tooting</option>
            <option>Tapi Tunbridge Wells</option>
            <option>Tapi Uddingston</option>
            <option>Tapi Upton Homebase</option>
            <option>Tapi Wallasey</option>
            <option>Tapi Warrington</option>
            <option>Tapi Waterlooville</option>
            <option>Tapi Watford</option>
            <option>Tapi Wellingborough</option>
            <option>Tapi Welwyn Garden City</option>
            <option>Tapi Wimbledon</option>
            <option>Tapi Woking Homebase</option>
            <option>Tapi Wolverhampton</option>
            <option>Tapi Yeovil</option>
            <option>Tapi York</option>
            <option>Tapi Altrincham</option>
            <option>Tapi Ashby de la Zouch</option>
            <option>Tapi Bath</option>
            <option>Tapi Bicester</option>
            <option>Tapi Bury</option>
            <option>Tapi Coventry</option>
            <option>Tapi Huddersfield</option>
            <option>Tapi Leighton Buzzard</option>
            <option>Tapi Manchester</option>
            <option>Tapi Newark</option>
            <option>Tapi Oldham</option>
            <option>Tapi Reigate</option>
            <option>Tapi Rochdale</option>
            <option>Tapi Sale</option>
            <option>Tapi Salford</option>
            <option>Tapi Staines</option>
            <option>Tapi Stockport</option>
            <option>Tapi Stretford</option>
            <option>Tapi Tonbridge</option>
            <option>Tapi Weston super Mare</option>
          </select>
        </div>
        <div className={styles.formCheck}>
          <input type="checkbox" id="terms" name="terms"/>
          <label htmlFor="terms">I agree with our <a href="/">Terms and Conditions</a></label>
        </div>
        <div className={styles.submitBtn}>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  )
}

export default Form;
