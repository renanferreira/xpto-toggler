package com.xpto.toggler.resource;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.Response;

import org.glassfish.grizzly.http.server.HttpServer;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import com.xpto.toggler.Server;

import static org.junit.Assert.assertEquals;

public class ToggleResourceTest {

    private HttpServer server;
    private WebTarget target;

    @Before
    public void setUp() throws Exception {
        // start the server
        server = Server.startServer();
        // create the client
        Client c = ClientBuilder.newClient();
        target = c.target(Server.BASE_URI);
    }

    @After
    public void tearDown() throws Exception {
        server.shutdownNow();
    }

    /**
     * Test to see that the message "Got it!" is sent in the response.
     */
    @Test
    public void testAddNew() {
        Response responseMsg = target.path("toggles/new").request().post(null);
        System.out.println(Response.status(200).entity(String.class).build());
        assertEquals(200, responseMsg.getStatus());
    }
}
