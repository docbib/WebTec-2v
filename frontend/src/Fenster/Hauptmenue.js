import './Hauptmenue.css';

const Hauptmenue = () => {
  return (
    <div className="hauptmenue">
      <div className="container_hm_h">
        <div className="hemd_1_hm">
          <img src="./images/Hemd-001-Min.jpg" alt="Hemd_1" />
        </div>
        <div className="hemd_2_hm">
          <img src="./images/Hemd-002-Min.jpg" alt="Hemd_2" />
        </div>
        <div className="hemd_3_hm">
          <img src="./images/Hemd-003-Min.jpg" alt="Hemd_3" />
        </div>
      </div>
      <div className="container_nt_hemd">
        <div className="nt_hemd">Neue Trends</div>
      </div>
      <div className="container_button_jetzt_a">
        <a className="j_a" href="HemdenFenster">
          JETZT ANSEHEN
        </a>
      </div>

      <div className="container_hm_p">
        <div className="polo_1_hm">
          <img src="./images/Polo-001-Min.jpg" alt="Polo_1" />
        </div>
        <div className="hemd_2_hm">
          <img src="./images/Polo-002-Min.jpg" alt="Polo_2" />
        </div>
        <div className="hemd_3_hm">
          <img src="./images/TShirt-001-Min.jpg" alt="TShirt_1" />
        </div>
      </div>
      <div className="container_nt_polos">
        <div className="nt_polos">Neue Trends</div>
      </div>
      <div className="container_button_jetzt_a_p">
        <a className="j_a_p" href="PolosFenster">
          JETZT ANSEHEN
        </a>
      </div>

      <div className="container_hm_s">
        <div className="strick_1_hm">
          <img src="./images/Strick-001-Min.jpg" alt="Strick_1" />
        </div>
        <div className="Strick_2_hm">
          <img src="./images/Strick-002-Min.jpg" alt="Strick_2" />
        </div>
        <div className="Sweat_1_hm">
          <img src="./images/Sweat-001-Min.jpg" alt="Sweat_1" />
        </div>
      </div>
      <div className="container_nt_strick">
        <div className="nt_strick">Neue Trends</div>
      </div>
      <div className="container_button_jetzt_a_s">
        <a className="j_a_s" href="StricksFenster">
          JETZT ANSEHEN
        </a>
      </div>

      <div className="container_C">
        <div className="c_items">
          KUNDENDIENST: Versand, Rückversand, Services
        </div>
        <div className="c_items">
          KONTAKT: Telefon: +49 00000000, Erreichbarkeit: Mo.-Fr. 08:00-17:00
          E-mail: shop@meinemarke.de
        </div>
        <div className="c_items">ÜBER: UNS, AGBs, Datenschutz, Impressum</div>
      </div>
    </div>
  );
};

export default Hauptmenue;
