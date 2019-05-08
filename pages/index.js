import MakePage from "../components/template";

const Index = () => (
  <div>
    What is an Amateur?
    <br />
    Amateur Radio is about configuring, building, using or tapping into almost
    anything wireless. There is a complete Amateur Radio world out there waiting
    to be used used for your ME, EE or aerospace related projects.
    <br />
    Amateur Radio is a licensed service that is used for the communication of
    voice and/or data. The communications can be local as in Wi-Fi or global as
    in <a href="http://websdr.ewi.utwente.nl:8901/"> short wave</a>. It can be
    telemetry from a special project or a voice message from a friend on the
    other side of the state. The communications signal could be analog or
    digital. One could use a custom data networks, access the global data
    network or communicate directly using a wide variety of protocols. <br />
    The options are almost limitless.
    <br />
    Not Licensed, we can help with that too.
    <br />
    Our current projects include transmitting and receiving telemetry using
    Raspberry PIs and Arduinos. There is also a UHF repeater that is open to all
    students on campus.
    <br />
    Contact us if you are interested in computer networking,{" "}
    <a href="http://www.aredn.org/"> Wi-Fi</a> , electronics, remote control,{" "}
    <a href="http://aprs.fi/telemetry/a/K6CPP-2?range=year"> telemetry</a>,{" "}
    <a href="http://www.rtl-sdr.com/building-a-ham-tranceiver-with-an-rtl-sdr-raspberry-pi-and-rpitx/">
      {" "}
      software development
    </a>{" "}
    and <a href="http://www.amsat.org/"> satellite communications</a>
    <br />
    <a href="http://www.cpp.edu/~cpparc/faq.html"> CPPARC FAQ </a>
    <br />
    <a href="http://www.cpp.edu/~cpparc/Resources.html">
      {" "}
      CPPARC Resource Page{" "}
    </a>{" "}
    <br />
    <a href="http://www.cpp.edu/~cpparc/cw.html">
      {" "}
      CPPARC CW (Morse Code) Page{" "}
    </a>
    <br />
    <br />
  </div>
);

export default MakePage("Amateur Radio Club K6CPP", Index);
